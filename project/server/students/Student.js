class Student {
    constructor (name, phone, email, image, db){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.image = image;
        this.setDB(db);
    }
    
    set(db){
        this.db = db;
    }
    
    static getAll (db) {
        return db.collection('students').find().toArray()
    }
    
    static getOne (id, db){
        //return db.collection('students').findOne({_id: id})
        return db.collection('students').aggregate([
            {$match: {_id: id}},
            {
              $lookup:
                {
                  from: "courses",
                  localField: "courses",
                  foreignField: "_id",
                  as: "courses"
                }
            }
        ]).toArray()    
    }
}

module.exports = Student;