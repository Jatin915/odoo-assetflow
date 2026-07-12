const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

function initFirebaseAdmin() {
    if (admin.apps.length) {
        return;
    }

    const serviceAccountPath = path.join(__dirname, 'firebase-service-account.json');

    if (!fs.existsSync(serviceAccountPath)) {
        throw new Error('Missing firebase-service-account.json in config/.');
    }

    const serviceAccount = require('./firebase-service-account.json');

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

async function verifyGoogleToken(idToken) {
    initFirebaseAdmin();
    const { uid } = await admin.auth().verifyIdToken(idToken);
    const user = await admin.auth().getUser(uid);

    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        picture: user.photoURL,
    };
}

module.exports = { verifyGoogleToken };