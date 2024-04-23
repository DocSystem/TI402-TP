function showCGUPopup() {
    const cguPopup = document.createElement('div');
    cguPopup.className = 'cgu-popup';
    cguPopup.innerHTML = `
        <div class="cgu-popup-content">
            <h1>À lire avant d'accéder au site</h1>
            <ul>
                <li>
                    <input type="checkbox" id="cgu-checkbox" />
                    <label for="cgu-checkbox">J'accepte les <a href="/html/CGU.html">conditions générales d'utilisation</a></label>
                </li>
                <li>
                    <input type="checkbox" id="rgpd-checkbox" />
                    <label for="rgpd-checkbox">J'accepte la <a href="/html/RGPD.html">politique de confidentialité</a></label>
                </li>
            </ul>
            <button onclick="acceptCGU()">Accepter</button>
        </div>
    `;
    document.body.appendChild(cguPopup);
}

function hideCGUPopup() {
    const cguPopup = document.querySelector('.cgu-popup');
    cguPopup.remove();
}

async function acceptCGU() {
    if (document.querySelector('#cgu-checkbox').checked === false || document.querySelector('#rgpd-checkbox').checked === false) {
        alert('Vous devez accepter les conditions générales d\'utilisation et la politique de confidentialité pour accéder au site');
        return;
    }
    /*const response = await fetch('https://ti402-api.docsystem.xyz/tp1/acceptCGU', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    });
    const data = await response.json();*/
    const data = { success: true }
    if (data.success) {
        hideCGUPopup();
        document.cookie = 'TI402_CGU_ALLOWED=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    }
}

function checkCGU() {
    if (!document.cookie.includes('TI402_CGU_ALLOWED=true')) {
        showCGUPopup();
    }
}

checkCGU();
