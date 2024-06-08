

class SaveManagement {
    constructor(){
        this.loaded = false;
        this.save = [0, 0, 0, 0];
        this.loadSave();
    }

    getFromLocalStorage() {
        const storagedSave = localStorage.getItem('LoPGameSave');
        if (storagedSave) {
            return storagedSave.split(',');
        }
        return null;
    }
    saveGame() {
        const storagedSave = this.getFromLocalStorage();
        console.log(storagedSave);
        if (storagedSave) {
            storagedSave.forEach((value, index) => {
                if (this.save[index] <= value) {
                    this.save[index] = value;
                }
            })
        }
        console.log(this.save)
        localStorage.setItem('LoPGameSave', this.save.toString());
    }
    loadSave() {
        const storagedSave = this.getFromLocalStorage();
        if (storagedSave) {
            this.save = storagedSave;
        }else{
            this.saveGame();
        }
        this.loaded = true;
    }
    getRank(fase){
        if(fase < this.save.length){
            if(this.save[fase] == 0){
                return 0;
            } else if(this.save[fase] == 1){
                return "C";
            } else if(this.save[fase] == 2){
                return "B";
            } else if(this.save[fase] == 3){
                return "A";
            } else if(this.save[fase] == 4){
                return "S";
            }
        }
    }
    setRank(fase, rank){
        if(fase < this.save.length){
            if(rank == "C"){
                this.save[fase] = 1;
            } else if(rank == "B"){
                this.save[fase] = 2;
            } else if(rank == "A"){
                this.save[fase] = 3;
            } else if(rank == "S"){
                this.save[fase] = 4;
            }
        }
        this.saveGame();
    }
    reset(){
        this.save = [0, 0, 0, 0];
        localStorage.setItem('LoPGameSave', this.save.toString());
    }
}