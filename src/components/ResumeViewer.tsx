import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, Eye, X } from "lucide-react";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewer = ({ isOpen, onClose }: ResumeViewerProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Satyam_Resume.pdf';
    link.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] w-[95%] sm:w-full p-4 sm:p-6">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold">My Resume</DialogTitle>
          <div className="flex items-center space-x-2">
            {/* <Button
              onClick={handleDownload}
              className="bg-gradient-primary hover:opacity-90"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button> */}
            {/* <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button> */}
          </div>
        </DialogHeader>

        <div className="max-h-[75vh] overflow-y-scroll">
          {/* Resume Content - Replace with actual resume */}
          <div className="bg-white text-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-inner min-h-[400px] sm:min-h-[600px] lg:min-h-[800px]">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Satyam Kumar</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">Associate Software Developer</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-1 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
                  <span>satyamkmr37@gmail.com</span>
                  <span>+91 95829 06377</span>
                  <a href="https://linkedin.com/in/satyamk001" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
                  <a href="https://github.com/satyamk001" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Portfolio</a>
                </div>
              </header>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Technical Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <p className="text-gray-700 text-sm">C++, JavaScript, TypeScript, SQL, HTML, CSS</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                    <p className="text-gray-700 text-sm">Angular, React.js, Next.js</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                    <p className="text-gray-700 text-sm">Node.js, Express.js, NestJS</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Databases</h4>
                    <p className="text-gray-700 text-sm">MySQL, MongoDB, PostgreSQL, Redis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools / Other</h4>
                    <p className="text-gray-700 text-sm">Git, Apache Kafka, Docker, CI/CD, Razorpay, Socket.IO, WebRTC</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Experience</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-gray-900">MapmyIndia</h3>
                      <span className="text-sm text-gray-600">July 2025 – Present</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">Associate Software Developer</p>
                    <ul className="list-disc list-outside ml-4 text-gray-700 text-sm space-y-1">
                      <li>Applied security best practices including input validation, error handling, and modular architecture to improve code quality and maintainability.</li>
                      <li>Optimized frontend and backend pipelines, achieving 40% faster page loads and reducing server error rates.</li>
                      <li>Implemented Redis for temporary data storage and task queuing, offloading workload from the main database and improving system responsiveness.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-gray-900">Comely Enterprises Pvt. Ltd.</h3>
                      <span className="text-sm text-gray-600">Jan 2025 – May 2025</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">Full Stack Developer Intern</p>
                    <ul className="list-disc list-outside ml-4 text-gray-700 text-sm space-y-1">
                      <li>Built and maintained scalable cross-platform applications using Angular, AngularJS, React Native, Express.js, and Redis, and MySQL; improved development efficiency by 25% through modular, reusable code.</li>
                      <li>Designed and deployed secure RESTful APIs with Node.js and Express.js, reducing response times by 30% and ensuring high reliability under concurrent load.</li>
                      <li>Applied Redis caching strategies and asynchronous processing to enhance system scalability and responsiveness.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900">Maharaja Surajmal Institute of Technology</h3>
                    <span className="text-sm text-gray-600">Dec 2021 – May 2025</span>
                  </div>
                  <p className="text-gray-700 text-sm">B. Tech in Electronics & Communication Engineering | CGPA: 7.9</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Resume Button Component
export const ResumeButton = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsResumeOpen(true)}
          variant="outline"
          className="border-primary/20 hover:border-primary/40 bg-glass backdrop-blur-glass shadow-glass hover:bg-primary/5"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Resume
        </Button>
      </motion.div>

      <ResumeViewer
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};