document.addEventListener('DOMContentLoaded', function() {
            // Set up click listeners for all code blocks
            const codeBlocks = document.querySelectorAll('.code-header');
            codeBlocks.forEach(block => {
                block.addEventListener('click', function() {
                    const parent = this.parentElement;
                    parent.classList.toggle('expanded');
                    
                    // Add a small delay to ensure content is fully rendered
                    setTimeout(() => {
                        // If block is expanded scroll to ensure it's visible
                        if (parent.classList.contains('expanded')) {
                            const headerPosition = this.getBoundingClientRect().top;
                            const offset = 100; // Additional offset to see more of the content
                            window.scrollTo({
                                top: window.scrollY + headerPosition - offset,
                                behavior: 'smooth'
                            });
                        }
                    }, 50);
                });
            });
            
            // Back to top button functionality
            const backToTopButton = document.querySelector('.back-to-top');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });
            
            //Add a scroll reveal effect for sections
            const sections = document.querySelectorAll('section');
            const revealSection = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            };
            
            const sectionObserver = new IntersectionObserver(revealSection, {
                root: null,
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            });
            
            sections.forEach(section => {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                sectionObserver.observe(section);
            });
        });
