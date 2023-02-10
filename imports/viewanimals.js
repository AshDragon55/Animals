Template.viewanimals.helpers({
    animals() {
        return Animals.find()
    }
})

Template.viewanimals.events({
    'click .js-edit'(){
        document.querySelector(".editID").value = this._id
        document.querySelector(".editAnimalspecies").value = this.species
        document.querySelector(".editAnimalname").value = this.name
       
        
        $('#editModal').modal('show')


    },
    'click .js-delete'(){
        console.warn('deleting',this._id)
        Animals.remove({"_id":this._id})
    }
})