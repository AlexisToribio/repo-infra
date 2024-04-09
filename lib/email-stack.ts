import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { SesSmtpCredentials } from "@pepperize/cdk-ses-smtp-credentials";
import { createName } from "../bin/cdk-code";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";

export interface EmailStackProps extends StackProps {
    env: {
        region: string;
        project: string;
        environment: string;
        domainName: string;
    };
}

export class EmailStack extends Stack {
    constructor(scope: Construct, id: string, props: EmailStackProps) {
        super(scope, id, props);

        const smtpCredentials = new secretsmanager.Secret(
            this,
            "SecretManagerToUserSES",
            {
                secretName: createName("sm", "smtp-credentials"),
                description: "SES Smtp Credentials",
                removalPolicy: RemovalPolicy.DESTROY,
            }
        );

        new SesSmtpCredentials(this, "SmtpCredentials", {
            secret: smtpCredentials,
            userName: createName("iam", "ses-user"),
        });
    }
}
