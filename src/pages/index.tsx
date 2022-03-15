import * as React from 'react';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { loadData } from '../lib/loadData';
import { SampleModel } from '../models/Sample';
import Link from 'next/link';

interface HomePageProps {
    data: SampleModel | null;
}

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold underline">Home</h1>
                <p>{data?.message ?? 'No data'}</p>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href="/theme">
                            <a>Theme</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const data = await loadData();

    return {
        props: { data },
    };
};

export default HomePage;
