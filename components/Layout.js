import Head from 'next/head'

const LayoutComponent = props => (
	<div>
        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Random Phone</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zendeskgarden/react-notifications@6.4.4/dist/index.min.js" />
        </Head>
        {props.children}
        <script src="/node_modules/bulma-tooltip/dist/css/bulma-tooltip.min.css"></script>
	</div>
);

export default LayoutComponent