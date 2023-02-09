Template.viewanimals.helpers({
    animals() {
        return Animals.find()
    }
})

Template.viewanimals.events({
    'click .js-edit'(){
        console.warn("Your are editing", this)
        document.querySelector(".editAnimalname").value = this.name
        document.querySelector(".editAnimalspecies").value = this.species
        document.querySelector(".editID").value = this._id

        $('#editModal').modal('show')


    },
    'click .js-delete'(){
        console.log('deleting',this._id)
        Animals.remove({"_id":this._id})
    }
})