export default function InfoSection() {
  return (
    <section className="bg-red-600 py-16 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Info Boxes */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Enrol Now */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-red-600">ENROL NOW</h3>
            <p>
              Join The Lings Senior Branch today! Enroll your child to
              experience quality education, dedicated faculty, and a nurturing
              environment for holistic growth and achievement.
            </p>
          </div>

          {/* History */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">History</h3>
            <p>
              Founded in 2010, The Lings Senior Branch began with 30 students
              and has grown into a respected institution emphasizing holistic
              education and strong values.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-red-600">Mission</h3>
            <p>
              To nurture confident, compassionate learners by providing quality
              education, fostering character development, and preparing students
              for academic and life success in a supportive environment.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-white">16+</h3>
            <p className="mt-2 text-lg text-white">YEARS SINCE INCEPTION</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">150+</h3>
            <p className="mt-2 text-lg text-white">EMPLOYEES</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">1,000+</h3>
            <p className="mt-2 text-lg text-white">STUDENTS</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">4+</h3>
            <p className="mt-2 text-lg text-white">CAMPUSES</p>
          </div>
        </div>
      </div>
    </section>
  )
}
