const AboutSection = () => {
    return (
      <section className="py-8" id="about">
        <div className="max-w-4xl mx-auto px-5 text-justify">
          
          <h2 className="text-3xl text-center font-bold mb-8">
          Code Your Dreams, Change the World
          </h2>
          <p className="text-lg mb-8">
            WeCode Malayalam helps you connect with peers, attend events, and share resources. You can schedule and participate in coding events, engage in discussions, and collaborate with fellow learners.
          </p>
  
          {/* Mission Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our Mission</h3>
            <p className="text-lg">
              Our mission is to help you solve coding problems and prepare for software engineering careers. We provide interview questions, solutions, and expert advice in Malayalam, helping you succeed in interviews at top tech companies.
            </p>
          </div>
  
          {/* Vision Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our Vision</h3>
            <p className="text-lg">
              We aim to help you build the confidence and skills to ace any interview by explaining complex problems in Malayalam, making learning more accessible for aspiring tech professionals.
            </p>
          </div>
  
          {/* About the Founder Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">About the Founder</h3>
            <p className="text-lg">
              I’m a software engineer with experience in cracking interviews at top tech companies like Google, Facebook, and Amazon. I’m passionate about helping others prepare for their dream job by guiding them through real interview questions and solutions.
            </p>
          </div>
  
          {/* Our Story Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our Story</h3>
            <p className="text-lg">
              WeCode Malayalam started to simplify interview preparation for Malayalam-speaking individuals. Having cracked interviews myself, I saw the need for a platform that teaches the skills to succeed in top tech interviews.
            </p>
          </div>
  
          {/* Join Us Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Join Us and Learn</h3>
            <p className="text-lg">
              Join us to learn how to solve coding problems effectively and prepare for interviews at companies like Google, Facebook, Microsoft, and more. We provide the resources you need to crack your dream job.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  