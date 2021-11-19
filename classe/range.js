class Range {
    // Initialise l'objet
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    // Dit si `x` tombe dans l'interval [from; to]
   includes(x) {
    return this.from <= x && x <= this.to;
   }

    // Produit une chaîne de caractère sous la forme "(from...to)", par exemple "(2...8)"
    toString(x){
        let y=this.includes(x) 
        if(y) return ""+x+" est inclus entre: ("+this.form+"..."+this.to+")"
    }

    // Analyse une chaîne de caractère au format "(from...to)" et retourne une nouvelle instance
    static parse(s)

    // RegExp pour analyser la chaîne avec parse
    static integerRangePattern;
}
class maClasse extends Range{
    
}