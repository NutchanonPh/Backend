exports.register = (req, res, next)=> {
    res.json({message: "Register"});
};

exports.login = (req, res, next)=> {
    res.json({message: "Login"});
};

exports.forgetPassword = (req, res, next)=> {
    res.json({message: "Forget Password"});
};

exports.verifyForgetPassword = (req, res, next)=> {
    res.json({message: "Verify Forget Password"});
};

exports.resetPassword = (req, res, next)=> {
    res.json({message: "Reset Password"});
};