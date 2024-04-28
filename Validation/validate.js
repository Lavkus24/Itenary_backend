
const validation = (req, res, next) => {
    const { name, email, password, mobile } = req.body;

    // Check name length
    if (name.length < 2 || name.length > 20) {
        return res.status(400).json({ error: 'Name must be between 2 and 20 characters' });
    }

    // Check email format
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check password length
    if (password.length < 4) {
        return res.status(400).json({ error: 'Password must be at least 4 characters long' });
    }

    // Check mobile length
    if (mobile.length !== 10) {
        return res.status(400).json({ error: 'Mobile number must be 10 digits long' });
    }

    // If all validations pass, move to the next middleware
    next();
}

// Function to validate email format
const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

module.exports = validation