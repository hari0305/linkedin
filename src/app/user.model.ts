export class User{
    public firstName : string;
    public secondName: string;
    public state: string;
    public city: string;
    public instituion: string;

    constructor(fname:string,sname:string,state:string,city:string,inst:string){
        this.city=city;
        this.firstName=fname;
        this.secondName=sname;
        this.state=state;
        this.instituion = inst;
    }

    updateDet(fn:string, ln:string, inst: string, citt:string){
        this.firstName=fn;
        this.secondName=ln;
        this.instituion=inst;
        this.city=citt;

    }
}

