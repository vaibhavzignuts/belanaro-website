// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { csrPillars } from '@/components/home/constants';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
// import { csrPillars } from '../constants';

const CSRStoryDetail = () => {
  //   const router = useRouter();
  const searchParams = useSearchParams();

  const pillarId = searchParams.get('pillarId');
  const storyTitle = searchParams.get('storyTitle');

  //   const { pillarId, storyTitle } = router.query;
  const [pillar, setPillar] = useState(null);
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the pillar and story based on the URL parameters
    if (pillarId && storyTitle) {
      const foundPillar = csrPillars.find((p) => p.id === pillarId);

      if (foundPillar) {
        const foundStory = foundPillar.stories.find(
          (s) => s.title === storyTitle
        );

        if (foundStory) {
          setPillar(foundPillar);
          setStory(foundStory);
        }
      }

      setLoading(false);
    }
  }, [pillarId, storyTitle]);

  if (loading) {
    return (
      <Suspense fallback={'something went wrong..'}>
        <div className="min-h-screen flex items-center justify-center bg-[#f5f3f0]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#A8415B]"></div>
        </div>
      </Suspense>
    );
  }

  if (!story || !pillar) {
    return (
      <Suspense fallback={'something went wrong..'}>
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f3f0] px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Story Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The story you&apos;re looking for could not be found.
          </p>
          <Link
            href="/csr"
            className="bg-[#A8415B] text-white py-2 px-6 rounded-lg hover:bg-[#923a4f] transition-colors"
          >
            Return to CSR Page
          </Link>
        </div>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={'something went wrong..'}>
      <div className="bg-[#f5f3f0] min-h-screen">
        {/* Hero Section with Story Image */}
        <div className="relative h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A8415B]/80 to-[#A8415B]/40 z-10"></div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0">
            <Image
              src={story.image || pillar.images[0]}
              alt={story.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 flex flex-col justify-end h-full px-4 md:px-8 py-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/"
                className="inline-flex items-center text-white hover:underline mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to CSR
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {story.title}
              </h1>
              <div className="flex items-center text-white/90">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {pillar.title}
                </span>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f5f3f0] to-transparent z-10"></div>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12"
          >
            {/* Summary/Introduction */}
            <div className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
              {story.content}
            </div>

            {/* Extended Story Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our dedicated team has been working tirelessly on this
                initiative, focusing on creating sustainable impact that will
                benefit communities for years to come. Through careful planning
                and execution, we&apos;ve been able to achieve remarkable
                results that align with our {pillar.title} pillar.
              </p>

              <h2 className="text-2xl font-bold text-[#A8415B] mt-8 mb-4">
                The Challenge
              </h2>
              <p>
                When we first identified this opportunity, we recognized several
                significant challenges that needed to be addressed. Resource
                limitations, logistical complications, and the need for
                long-term sustainability were all factors that required careful
                consideration and planning.
              </p>
              <p>
                Working closely with local stakeholders and community leaders,
                we conducted thorough research to understand the root causes of
                the issues we were facing and to develop solutions that would
                have lasting impact.
              </p>

              <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={pillar.images[1] || pillar.images[0]}
                    alt="Project in action"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={pillar.images[2] || pillar.images[0]}
                    alt="Community engagement"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#A8415B] mt-8 mb-4">
                Our Approach
              </h2>
              <p>
                We adopted a holistic approach that focused on empowerment
                rather than simply providing temporary relief. By implementing
                training programs, supporting local initiatives, and
                establishing sustainable infrastructure, we ensured that our
                involvement would create lasting positive change.
              </p>

              <blockquote className="border-l-4 border-[#A8415B] pl-6 italic my-8 py-2">
                &quot;This initiative has completely changed our
                community&apos;s outlook. We&apos;re now empowered with the
                skills and resources to build better futures for ourselves and
                our children.&quot;
                <footer className="text-sm mt-2 text-gray-500 font-normal">
                  — Community Member
                </footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-[#A8415B] mt-8 mb-4">
                Measurable Impact
              </h2>
              <p>
                The program&apos;s success is measured not just in numbers but
                in the real-life transformations we&apos;ve witnessed. Families
                now have improved access to resources, knowledge, and
                opportunities that were previously out of reach.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>
                  Over 500 individuals directly benefited from the initiative
                </li>
                <li>85% of participants reported improved quality of life</li>
                <li>Local employment opportunities increased by 35%</li>
                <li>
                  Sustainable practices adopted by 28 community organizations
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[#A8415B] mt-8 mb-4">
                Looking Forward
              </h2>
              <p>
                Building on the success of this initiative, we are now focused
                on expanding its reach and impact. We&apos;re developing
                partnerships with additional stakeholders and exploring
                innovative approaches to address emerging challenges in the
                community.
              </p>
              <p>
                Looking ahead, we plan to expand this program to reach even more
                communities and create more positive impact in line with our
                core values and commitment to social responsibility.
              </p>
            </div>
          </motion.div>

          {/* Related Stories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              More {pillar.title} Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillar.stories
                .filter((s) => s.title !== story.title)
                .slice(0, 2)
                .map((relatedStory, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
                  >
                    <Link
                      href={{
                        pathname: `/csr/stories/${encodeURIComponent(
                          relatedStory.title.toLowerCase().replace(/\s+/g, '-')
                        )}`,
                        query: {
                          pillarId: pillar.id,
                          storyTitle: relatedStory.title,
                        },
                      }}
                      className="block bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="h-48 relative">
                        <Image
                          src={
                            relatedStory.image ||
                            pillar.images[idx % pillar.images.length]
                          }
                          alt={relatedStory.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-4">
                            <h3 className="text-white text-xl font-bold">
                              {relatedStory.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 line-clamp-2">
                          {relatedStory.content}
                        </p>
                        <div className="flex justify-end mt-4">
                          <span className="text-[#A8415B] font-medium">
                            Read More
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#A8415B] text-white py-16"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Join Us in Making a Difference
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-8">
                We&apos;re always looking for partners, volunteers, and fresh
                ideas to enhance our CSR initiatives. Together, we can create a
                more sustainable and equitable future.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#A8415B] py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg font-medium"
              >
                Get Involved
              </motion.button>
            </div>
          </motion.div>

          {/* Scroll Indicator - Only shown on Overview */}
          {/* {!isDetailView && ( */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            {/* <div className="text-center text-gray-600 text-sm">
              <p>Explore our pillars</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </motion.div>
            </div> */}
          </motion.div>
          {/* )} */}
        </div>
      </div>
    </Suspense>
  );
};

export default CSRStoryDetail;
