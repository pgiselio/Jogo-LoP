

class SaveManagement {
    static loaded = false;

    getFromLocalStorage() {
        return JSON.parse(localStorage.getItem('LoPGameSave'));
    }
    saveGame() {
        localStorage.setItem('LoPGameSave', JSON.stringify({ fase, vidas, faseUnlocked }));
    }
    loadSave() {
        const save = this.getFromLocalStorage();
        if (save && save.vidas && save.fase) {
            vidas = save.vidas;
            fase = save.fase;
            faseUnlocked = save.faseUnlocked;
        }else{
            this.saveGame(1, 4, 1);
        }
        this.loaded = true;
    }
    
}