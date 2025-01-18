import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
})

interface RequestBody {
    email: string;
}

interface MailchimpResponse {
    id: string;
    email_address: string;
    status: string;
}

interface ErrorResponse {
    error: string;
}

export async function POST(Request: Request): Promise<Response> {
    const { email }: RequestBody = await Request.json();

    if (!email) return new Response(JSON.stringify({ error: "Email is required" } as ErrorResponse));

    try {
        if (!process.env.MAILCHIMP_AUDIENCE_ID) {
            return new Response(JSON.stringify({ error: "MAILCHIMP_AUDIENCE_ID is not defined" } as ErrorResponse));
        }

        const res = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, { email_address: email, status: "subscribed" });

        if ('id' in res) {
            return new Response(JSON.stringify(res as MailchimpResponse));
        } else {
            return new Response(JSON.stringify({ error: res as unknown as string } as ErrorResponse));
        }
    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: JSON.parse(error.response.text) } as ErrorResponse)
        );
    }
}