import Head from 'next/head';

interface Props {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
}

const origin =
    typeof window === 'undefined' ? '' : (window as any).location.origin;

export default function MainLayout({
    children = null,
    title,
    description,
    keywords,
    image,
}: Props): React.ReactNode {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Juan Motta" />
                <meta
                    name="description"
                    content={`Information about pokemon ${title}`}
                />
                <meta
                    name="keywords"
                    content={`${title}, pokemon, pokedex, pokeapp, pokeapi`}
                />
                <meta property="og:title" content="Pokeapp" />
                <meta
                    property="og:description"
                    content="Get info about all pokemons from 1st to 9th generation."
                />
                <meta
                    property="og:image"
                    content={`${origin}/pokemon_mini.webp`}
                />
            </Head>
            {children}
        </>
    );
}
