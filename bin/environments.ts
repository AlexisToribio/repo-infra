interface Environment {
	region: string;
	project: string;
	environment: string;
	dbName: string;
	dbUser: string;
	domainName: string;
}

export const environments: { [key: string]: Environment } = {
	dev: {
		region: '',
		project: '',
		environment: '',
		dbName: '',
		dbUser: '',
		domainName: '',
	},

	prod: {
		region: '',
		project: '',
		environment: '',
		dbName: '',
		dbUser: '',
		domainName: '',
	},
};
