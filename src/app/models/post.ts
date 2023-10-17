export class Post 
{
    public id: any;
    public title: any;
    public name: any;
    public description: any;
    public date: any;
    public status: any;
    public picture: any;

    set(data: any)
    {

        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
        this.description = data.description;
        this.date = data.date;
        this.status = data.status;

        this.picture = 'https://picsum.photos/600/200?random='+this.id;
    }
}
