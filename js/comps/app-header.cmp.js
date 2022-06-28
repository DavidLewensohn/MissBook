export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h3>MissBook</h3>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link>|
                <router-link to="/book">Book</router-link>|
                <router-link to="/about">About</router-link>|
            </nav>
        </header>
    
    `
}