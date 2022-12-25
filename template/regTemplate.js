const regTemplate = (name, email, password, token) => {
    return `<div>
        <h1>Hi, ${name} Welcome to CODE-W</h1>
        <article style="margin:auto; object-fit:cover;">
            <img src="https://media.istockphoto.com/id/1391461206/vector/handshake-of-two-businessmen-in-suits-partnership-concept.jpg?b=1&s=612x612&w=0&k=20&c=NUYFIVu9NoNhJWVL9izNvveY1RN-gKMTZ2lK5lZq6Q4=" width="300" height="300"/>
            <h4>Thank you for registering in CODE-W, Please verify your account by clicking below link.</h4>
            <a href="http://localhost:3000/auth/register/verify/${token}">Verify Your Account</a>
        </article>
    </div>`
}

module.exports = regTemplate
