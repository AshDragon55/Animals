Template.editAnimal.events({
    'click .js-editAnimal'() {
        let eId = document.querySelector(".editID").value
        let name = document.querySelector('.editAnimalName').value
        let species = document.querySelector('.editAnimalSpecies').value
        console.info("saving edits", eId)
        Animaldb.update(
            { _id: eId },
            {
                $set: {
                    'name': name,
                    'species': species
                }
            }
        )
    }
})