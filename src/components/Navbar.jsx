export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="https://github.com/Bobby-Shaw" target="_blank">
                <div className="nav-item">
                    <svg className="nav-logo" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fill="#000000" fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"/>
                    </svg>
                    <span>Github</span>
                </div>
            </a>
            <a href="https://shawuk2006@gmail.com" target="_blank">
                <div className="nav-item">
                    <svg className="nav-logo" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M21.96 7.885L12 13.635l-9.96-5.75l9.335-5.39a1.24 1.24 0 0 1 1.25 0zM2 9.59l10 5.775L22 9.59v8.655a2.755 2.755 0 0 1-2.75 2.75H4.75A2.755 2.755 0 0 1 2 18.245z" clip-rule="evenodd"/>
                    </svg>
                    <span>Email</span>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/bobby-s-shaw/" target="_blank">
                <div className="nav-item">
                    <svg className="nav-logo" width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41,4.1H7A2.9,2.9,0,0,0,4,7V41.1A2.9,2.9,0,0,0,7,44H41a2.9,2.9,0,0,0,2.9-2.9V7A2.9,2.9,0,0,0,41,4.1Zm-25.1,34h-6v-19h6Zm-3-21.6A3.5,3.5,0,0,1,9.5,13a3.4,3.4,0,0,1,6.8,0A3.5,3.5,0,0,1,12.9,16.5ZM38,38.1H32.1V28.8c0-2.2,0-5-3.1-5s-3.5,2.4-3.5,4.9v9.4H19.6v-19h5.6v2.6h.1a6.2,6.2,0,0,1,5.6-3.1c6,0,7.1,3.9,7.1,9.1Z"/>
                    </svg>
                    <span>LinkedIn</span>
                </div>
            </a>
        </nav>
    )
}
