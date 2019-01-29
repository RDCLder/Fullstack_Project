{
    id: 1,
        body: "I'm picking this up right after class.",
            createdAt: 2019 - 01 - 26T01: 54: 39.000Z,
                updatedAt: 2019 - 01 - 26T01: 54: 39.000Z,
                    author_id: 4,
                        topic_id: 1,
                            parent_id: null,
                                topic:
    topic {
        dataValues:
        {
            id: 1,
                title: 'Kingdom Hearts 3 is Releasing on Tuesday!!!',
                    body:
            "OMG OMG OMG OMG OMG.  It's too bad I don't have time to play it...",
                createdAt: 2019 - 01 - 27T02: 59: 13.000Z,
                    updatedAt: 2019 - 01 - 27T02: 59: 13.000Z,
                        community_id: 3,
                            author_id: 4,
                                community: [community]
        },
        _previousDataValues:
        {
            id: 1,
                title: 'Kingdom Hearts 3 is Releasing on Tuesday!!!',
                    body:
            "OMG OMG OMG OMG OMG.  It's too bad I don't have time to play it...",
                createdAt: 2019 - 01 - 27T02: 59: 13.000Z,
                    updatedAt: 2019 - 01 - 27T02: 59: 13.000Z,
                        community_id: 3,
                            author_id: 4,
                                community: [community]
        },
        _changed: { },
        _modelOptions:
        {
            timestamps: true,
                validate: { },
            freezeTableName: true,
                underscored: false,
                    underscoredAll: false,
                        paranoid: false,
                            rejectOnEmpty: false,
                                whereCollection: null,
                                    schema: null,
                                        schemaDelimiter: '',
                                            defaultScope: { },
            scopes: [],
                indexes: [],
                    name: [Object],
                        omitNull: false,
                            sequelize: [Sequelize],
                                hooks: { },
            uniqueKeys: { }
        },
        _options:
        {
            isNewRecord: false,
                _schema: null,
                    _schemaDelimiter: '',
                        include: [Array],
                            includeNames: [Array],
                                includeMap: [Object],
                                    includeValidated: true,
                                        raw: true,
                                            attributes: undefined
        },
        __eagerlyLoadedAssociations: [],
            isNewRecord: false,
                community:
        community {
            dataValues: [Object],
                _previousDataValues: [Object],
                    _changed: { },
            _modelOptions: [Object],
                _options: [Object],
                    __eagerlyLoadedAssociations: [],
                        isNewRecord: false
        }
    },
    user:
    user {
        dataValues:
        {
            id: 4,
                username: 'ray',
                    password:
            '$2a$08$QgLiVs23vRMFMZskRgBQA.19T7vV6k7L3te3T0N2E.Me/57wss/9C',
                email: '',
                    bio: null,
                        createdAt: 2019 - 01 - 26T19: 04: 12.552Z,
                            updatedAt: 2019 - 01 - 26T19: 04: 12.552Z
        },
        _previousDataValues:
        {
            id: 4,
                username: 'ray',
                    password:
            '$2a$08$QgLiVs23vRMFMZskRgBQA.19T7vV6k7L3te3T0N2E.Me/57wss/9C',
                email: '',
                    bio: null,
                        createdAt: 2019 - 01 - 26T19: 04: 12.552Z,
                            updatedAt: 2019 - 01 - 26T19: 04: 12.552Z
        },
        _changed: { },
        _modelOptions:
        {
            timestamps: true,
                validate: { },
            freezeTableName: true,
                underscored: false,
                    underscoredAll: false,
                        paranoid: false,
                            rejectOnEmpty: false,
                                whereCollection: null,
                                    schema: null,
                                        schemaDelimiter: '',
                                            defaultScope: { },
            scopes: [],
                indexes: [],
                    name: [Object],
                        omitNull: false,
                            sequelize: [Sequelize],
                                hooks: { },
            uniqueKeys: { }
        },
        _options:
        {
            isNewRecord: false,
                _schema: null,
                    _schemaDelimiter: '',
                        include: undefined,
                            includeNames: undefined,
                                includeMap: undefined,
                                    includeValidated: true,
                                        raw: true,
                                            attributes: undefined
        },
        __eagerlyLoadedAssociations: [],
            isNewRecord: false
    }
}