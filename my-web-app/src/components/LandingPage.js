const LandingPage = {
    render: () => {
        return `
            <h1>Welcome to the Web Application</h1>
            <p>This is the landing page.</p>
            <a href="/login" onclick="navigate(event, '/login')">Login</a>
        `;
    }
};

export default LandingPage;