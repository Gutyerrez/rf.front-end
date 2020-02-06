import sha256 from 'sha256';
import md5 from 'md5';

export default class Helper {
    static compare(password, hashedPassword) {
        if (!hashedPassword.includes("$")) return md5(password).toLowerCase() === hashedPassword.toLowerCase();
    
        const shaInfo = hashedPassword.split('$');
    
        const salt = shaInfo[2].split("@")[1];
        const hash = shaInfo[2].split("@")[0];
    
        const password1 = sha256(password) + salt;
        const password2 = sha256(password1);
    
        return password2 === hash;
    }
}