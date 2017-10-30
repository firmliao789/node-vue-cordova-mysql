const model = require('../model')
const util = require('../utils/')

const errorMsg = {
    mobileNull: {
        code: -1,
        info: '用户手机号为空'
    },
    mobileFormatError: {
        code: -2,
        info: '手机号码格式错误'
    },
    mobileAlreadyError: {
        code: -3,
        info: '手机号码已存在'
    },
    userNameNull: {
        code: -4,
        info: '用户名为空'
    },
    passwdNull: {
        code: -5,
        info: '用户密码为空'
    },
    confirmPasswordNull: {
        code: -6,
        info: '用户确认密码为空'
    },
    passwdFormatError: {
        code: -7,
        info: '用户密码格式错误'
    },
    pwdAtypism: {
        code: -8,
        info: '两次输入密码不一致'
    },
    emailFormatError: {
        code: -9,
        info: '用户电子邮件格式错误'
    }
}
module.exports = {
    /**
     * 创建用户
     * @param  {object} user 用户信息
     * @return {object}      创建结果
     */
    async create(user) {
        let result = await model.user.create(user)
        return result
    },
    /**
     * 根据手机号查询用户
     * @param  {object} phone 查找的表单数据
     * @return {object|null}      查找结果
     */
    async getExistOne(phone) {
        let resultData = await model.user.findAll({
            where: {'mobile': phone}
        })
        return resultData
    },
    /**
     * 登录业务操作
     * @param  {object} formData 登录表单信息
     * @return {object}          登录业务操作结果
     */
    async signIn({name, passwd}) {
        let resultData = await model.user.findAll({
            where: {
                'passwd': passwd,
                'name': name
            }
        })
        return resultData
    },
    validatorSignUp(userInfo)
    {
        if (!userInfo.mobile)
            return errorMsg.mobileNull
        else if (!util.isCellPhone(userInfo.mobile))
            return errorMsg.mobileFormatError
        else if (!userInfo.name)
            return errorMsg.userNameNull
        else if (!userInfo.passwd)
            return errorMsg.passwdNull
        else if (!userInfo.confirmPasswd)
            return errorMsg.confirmPasswordNull
        else if (!/[\w+]{6,16}/.test(userInfo.passwd))
            return errorMsg.passwdFormatError
        else if (userInfo.passwd != userInfo.confirmPasswd)
            return errorMsg.pwdAtypism
        else if (userInfo.email && !util.isEmail(userInfo.email))
            return errorMsg.emailFormatError
        else
            return ''
    }
    ,
    errorMsg
}
