import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, recommendedProfiles } from "../api";
import Layout from "../components/Layout";
import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendedProfiles).toPromise();
      console.log({ response });
      setProfiles(response.data.recommendedProfiles);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Lensbook</title>
      </Head>
      <HeroSection />
      <div className="my-16 space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {profiles.map((profile) => (
          <Link href={`/profile/${profile.id}`} key={profile.id}>
            <a className="flex flex-col items-center">
              {profile.picture &&
              profile.picture.original &&
              profile.picture.original.url.includes("lens.infura-ipfs.io") ? (
                <div className="relative w-60 h-60 bg-emerald-900 rounded">
                  <Image
                    src={profile.picture.original.url}
                    layout="fill"
                    objectFit="cover"
                    alt={profile.handle}
                    className="rounded"
                  />
                </div>
              ) : (
                <div className="bg-emerald-900 w-60 h-60 rounded" />
              )}
              <div className="mt-4 text-lg leading-6 font-medium text-center space-y-1">
                <h3>{profile.name}</h3>
                <p className="text-emerald-600">{profile.handle}</p>
              </div>
              <div className="text-gray-600 mt-2 grid grid-cols-2 gap-x-2 text-sm sm:text-base text-center">
                <p>
                  <span className="text-gray-900 font-medium">
                    {profile.stats.totalFollowers}
                  </span>{" "}
                  Followers
                </p>
                <p>
                  <span className="text-gray-900 font-medium">
                    {profile.stats.totalFollowing}
                  </span>{" "}
                  Following
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
