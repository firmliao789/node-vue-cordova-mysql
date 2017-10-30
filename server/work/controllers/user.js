const model = require('../model')
const userService = require('../services/user')


module.exports = {
    //name 用户名 not null
    //passwd 用户密码 not null
    //mobile 用户手机号 not null
    //gender 用户性别 not null
    //confirmPassword 确认密码 not null
    //email 用户邮箱 null
    signIn: async(ctx) => {
        const Data = ctx.request.body;
        var validatorResult = await userService.validatorSignUp(Data);
        if (validatorResult)
            ctx.body = validatorResult
        else {
            var getUserInfoResult = await userService.getExistOne(Data.mobile);
            if (getUserInfoResult.length > 0)
                ctx.body = userService.errorMsg.mobileAlreadyError
            else {
                let form = {
                    id: 'U' + (+new Date()),
                    name: Data.name,
                    passwd: Data.passwd,
                    mobile: Data.mobile,
                    gender: Data.gender||1
                }
                if (Data.email)
                    form.email = Data.email
                let userResult = await userService.create(form);
                if (userResult) {
                    ctx.body = {
                        code: 200,
                        info: '用户创建成功'
                    }
                }
                else {
                    ctx.body = {
                        code: 500,
                        info: '服务器错误'
                    }
                }
            }

        }

    },
    //name
    //passwd
    signUp: async(ctx) => {
        var Data = ctx.request.body;
        let userResult = await userService.signIn(Data);
        if (userResult) {
            let session = {};
            console.log(ctx);
            session.isLogin = true;
            session.userId = userResult.id;
            session.userName = userResult.userName;
            ctx.session = session;
            ctx.body = {
                code: 200,
                info: '登录成功'
            }
        }
        else {
            ctx.body = {
                code: -99,
                info: '当前用户不存在'
            }
        }
    }
}
