exports.register = (req, res, next)=> {
    const {email, password} = req.body;
    // Logic
    res.json({email, password});
};

exports.login = (req, res, next)=> {
    const {email, password} = req.body;
    res.json({email, password});
};

exports.forgetPassword = (req, res, next)=> {
    const {email} = req.body;
    // Gen Token => Create Link => Send to Email
    res.json({email});
};

exports.verifyForgetPassword = (req, res, next)=> {
    const {token} = req.params;
    // Logic check token
    // Redirect reset password
    res.json({token});
};

exports.resetPassword = (req, res, next)=> {
    const{token} = req.params;
    const{password} = req.body;
    // Check Token
    // Change new password
    // Storage new password to DB
    res.json({token, password});
};