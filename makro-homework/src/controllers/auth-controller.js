exports.register = (req, res, next)=> {
    const {email, password} = req.body;
    // Logic
    res.json({email, password});
};

exports.login = (req, res, next)=> {
    res.json({message: "Login"});
};

exports.forgetPassword = (req, res, next)=> {
    const {email} = req.body;
    //Gen Token => Create Link => Send to Email
    res.json({message: "Forget Password"});
};

exports.verifyForgetPassword = (req, res, next)=> {
    res.json({message: "Verify Forget Password"});
};

exports.resetPassword = (req, res, next)=> {
    res.json({message: "Reset Password"});
};