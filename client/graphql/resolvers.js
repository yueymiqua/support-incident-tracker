export const resolvers = {
    Query: {
        incidents: () => knex('incidents').select('*'),
        users: () => knex('users').select('*'),
        getUserById: (_, {userId}) => knex('users').where( 'id', userId ).first()
    },
    Mutation: {
        addIncident: async (_, {input}) => {
            const [incident] = await knex("incidents" ).returning('*').insert(input)
            console.log(incident);
            return incident
        },
        updateIncident: async (_, { incidentId, status, updated_date, resolver, resolver_comments }) => {
            try {
                const [returnedIncident] = await knex("incidents")
                .where({ incidentId: incidentId })
                .returning('*')
                .update({
                    status: status,
                    updated_date: updated_date, 
                    resolver: resolver, 
                    resolver_comments: resolver_comments 
                })
                console.log(returnedIncident)
                return returnedIncident
            } catch (error) {
                console.log(error)
            }},
        addUser: (_, {input}) => {
            const user = knex("users").insert(input)
            return user
        }
    }
}