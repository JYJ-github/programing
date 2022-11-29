function solution(id_pw, db) {
    let id = 0;
    for (let i = 0; i < db.length; i++) {
        if (db[i][0] === id_pw[0]) {
            id++;
            if (db[i][1] === id_pw[1]) {
                return "login";
            } else {
                return "wrong pw";
            }
        }
    }
    if (id === 0) {
        return "fail";
    }
}