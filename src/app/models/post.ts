export class Post 
{
    public id: any;
    public title: any;
    public name: any;
    public description: any;
    public date: any;
    public status: any;
    public picture: any;
    set(id: number, title: string, name: string, description: string, date: string, status: string)
    {

        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
        this.picture = 'https://picsum.photos/600/200?random='+this.id;
    }
}
