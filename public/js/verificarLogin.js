async function verificarLogin() {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '/login';
    } else {
        try {
            const response = await fetch(`http://backendcac.alwaysdata.net/verificarToken/${token}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                localStorage.clear();
                window.location.href = '/login';
            } else {
                const data = await response.json();
                console.log("Fetch response data:", data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            localStorage.clear();
            window.location.href = '/login';
        }
    }
}

verificarLogin();