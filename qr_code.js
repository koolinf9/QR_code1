//JavaScript (index.js)
function generer_code_qr() {
    const text = document.getElementById('text').value;
    const qrcodeContainer = document.getElementById('qrcode');
    const errorContainer = document.getElementById('error');
    const downloadButton = document.getElementById('download');

    qrcodeContainer.innerHTML = '';
    errorContainer.innerHTML = '';

    if (text.trim() === '') {
        errorContainer.innerHTML = 'Veuillez entrer une URL valide.';
        return;
    }

    const qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 256,
        height: 256,
    });

    downloadButton.style.display = 'block';
    downloadButton.onclick = function() {
        const img = qrcodeContainer.querySelector('img');
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'qrcode.png';
        link.click();
    };
}


