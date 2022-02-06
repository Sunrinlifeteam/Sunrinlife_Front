class Meal{
    constructor(date, menus){
        this.date = date;
        this.menus = menus;
    }

    fromJson(json){
        this.date = json.date;
        this.menus = json.menus;
    }
}

export default Meal