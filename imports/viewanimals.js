Template.viewAnimals.helpers({
    animals() {
        return Animaldb.find()
    }
})

Template.viewAnimals.events({
    'click .js-edit'(){
        console.warn("You are editing, this")
        document.querySelector(".editAnimalspecies").value = this.species
        document.querySelector(".editAnimalname").value = this.name
        document.querySelector(".editID").value = this._id
       
        
        $('#editModal').modal('show')


    },
    'click .js-delete'(){
        console.warn('deleting',this._id)
        Animals.remove({"_id":this._id})
    }
})