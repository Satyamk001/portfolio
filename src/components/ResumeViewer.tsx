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
<<<<<<< HEAD
    link.href = 'https://drive.google.com/file/d/1LcuVaVX-qjkDLM0Tw-QmKxOiTzOUVNgc/view?usp=sharing'; // Replace with actual resume PDF path
=======
    link.href = '/Satyam_Resume.pdf';
>>>>>>> 875f70f65de414ecfdedbad037c7ade98ea2eca7
    link.download = 'Satyam_Resume.pdf';
    link.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-scroll">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-2xl font-bold">My Resume</DialogTitle>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleDownload}
              className="bg-gradient-primary hover:opacity-90"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto">
          {/* Resume Content - Replace with actual resume */}
          <div className="bg-white text-black p-8 rounded-lg shadow-inner min-h-[800px]">
            <div className="max-w-3xl mx-auto">
              <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Satyam Kumar</h1>
                <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
                <div className="flex justify-center space-x-6 text-sm text-gray-600">
                  <span>satyamkumar37@gmail.com</span>
                  <span>9582406377</span>
                  <span>LinkedIn Profile</span>
                </div>
              </header>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Experience</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer Intern</h3>
                    <p className="text-gray-600 mb-2">Comely Enterprises Pvt. Ltd. | Jan 2025 - May 2025</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Built and maintained scalable cross-platform applications using Angular, AngularJS, React Native, Express.js, and MySQL</li>
                      <li>Contributing to a 25% increase in development efficiency through modular code practices</li>
                      <li>Engineered and deployed secure RESTful APIs with Express.js and Node.js, reducing response time by 30%</li>
                      <li>Drove performance optimization efforts on both frontend and backend, leading to a 40% improvement in page load speed</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Backend Developer Intern</h3>
                    <p className="text-gray-600 mb-2">Digital Xperts | June 2025 - June 2025</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Developed and integrated an email warm-up feature using Node.js, MongoDB, NodeMailer transporter and cron scheduler</li>
                      <li>Implemented custom cron jobs to control email sending, volume controls and various management rules</li>
                      <li>Refactored and cleaned existing backend APIs for scalability, error handling, and maintainability</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>C++</li>
                      <li>SQL</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frameworks/Libraries</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Angular</li>
                      <li>AngularJS</li>
                      <li>Express.js</li>
                      <li>Git</li>
                      <li>VS Code</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Visual Studio</li>
                      <li>Firebase</li>
                      <li>MySQL</li>
                      <li>Node.js</li>
                      <li>React Native</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Education</h2>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">BTech in Electronics and Communication Engineering</h3>
                  <p className="text-gray-600">Maharaja Surajmal Institute of Technology, Delhi | Dec 2021 - May 2025</p>
                  <p className="text-gray-600">CGPA: 7.9</p>
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
          className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
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