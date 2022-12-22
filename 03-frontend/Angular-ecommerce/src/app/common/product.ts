export class Product {
        // Properties are delared on constructor and match with JSON from Spring Boot
    constructor(public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public imageUrl: string,
                public active: boolean,
                public unitsInStock: number,
                public dateCreated: Date,
                public lastUpdated: Date
        ) {
    }
}
