db.collection('Newtube_Saved').get().then(save => {
    save.docs.forEach(doc => {
        console.log(doc.data())
    });
})