Template.editAnimal.events({
    'click .js-editAnimal'(){
        
        let eID=document.querySelector(".editID").value
        let name=document.querySelector(".editAnimalName").value
        let species=document.querySelector(".editAnimalspecies").value
        console.info("saving edits", eID)
        Animals.update(
            {_id: eID},
            {$set:{
                'name': name,
                'species': species 
            }}
        )
        
    }
})
