import User from "../model/user.js"

class RepositoryUser {
    
    async Buscar() {
        return User.findAll()
    }

    async Detalhe(id) {
        return User.findByPk(id)
    }

    async BuscarEmail(email) {
        return User.findOne({ where: { email } })
    }

    async Criar(name, email, password) {
        await User.create({ name, email, password })
    }

    async Alterar(id, name, email, password) {
        const user = await User.findByPk(id)

        if(!user) {
            throw new Error("Usuário não encontrado")
        }

        user.name = name || user.name
        user.email = email || user.email
        user.password = password || user.password

        await user.save()
    }

    async Deletar(id) {
        const user = await User.findByPk(id)

        if(!user) {
            throw new Error("Usuário não encontrado")
        }

        await User.destroy()
    }

}

export default new RepositoryUser