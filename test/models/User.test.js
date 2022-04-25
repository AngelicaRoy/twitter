const user=require('./../../app/models/user')

descrive("Unit Test for User class", () => {
    test('Create an User object', () => {
        //Aqui colocas el codigo que vas a usar en la app
        const user=new User(1,"carlogilmar", "Carlo", "Bio",
        "dataCreated","lastUpdated")

        //Aqui validas los resultados de ese codigo
        //Esta es una comporacion que va a igualar el valor de la izquierda
        //con el valor de la derecha(valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})