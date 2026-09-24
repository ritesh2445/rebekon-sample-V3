import React from 'react';

/**
 * AmbientMesh provides fluid, continuous Apple iOS liquid gradients
 * (vibrant pink #FF2D55, electric blue #007AFF, cyan #00C7BE, and purple #AF52DE)
 * positioned behind the page so that all glassmorphic components catch
 * and refract colorful Apple-style specular lighting.
 */
export const AmbientMesh: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Top Left - Vibrant Apple Pink Orb */}
      <div 
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full opacity-35 blur-[120px] animate-aurora-1"
        style={{
          background: 'radial-gradient(circle, #FF2D55 0%, #FF375F 40%, rgba(255,45,85,0) 70%)'
        }}
      />

      {/* Top Right - Electric Apple Blue Orb */}
      <div 
        className="absolute -top-24 right-0 lg:-right-32 w-[700px] h-[700px] rounded-full opacity-35 blur-[130px] animate-aurora-2"
        style={{
          background: 'radial-gradient(circle, #007AFF 0%, #0A84FF 40%, rgba(0,122,255,0) 70%)'
        }}
      />

      {/* Center Floating - Neon Violet / Purple Orb */}
      <div 
        className="absolute top-[42%] left-[25%] w-[600px] h-[600px] rounded-full opacity-20 blur-[140px] animate-aurora-3"
        style={{
          background: 'radial-gradient(circle, #AF52DE 0%, #7C3AED 40%, rgba(175,82,222,0) 70%)'
        }}
      />

      {/* Bottom Right - Cyan / Blue Glow Orb */}
      <div 
        className="absolute bottom-10 right-[5%] w-[650px] h-[650px] rounded-full opacity-25 blur-[130px] animate-aurora-1"
        style={{
          background: 'radial-gradient(circle, #00C7BE 0%, #007AFF 50%, rgba(0,199,190,0) 70%)'
        }}
      />

      {/* Bottom Left - Soft Pink Glow Orb */}
      <div 
        className="absolute bottom-20 -left-20 w-[550px] h-[550px] rounded-full opacity-25 blur-[120px] animate-aurora-2"
        style={{
          background: 'radial-gradient(circle, #FF2D55 0%, #F43F5E 45%, rgba(255,45,85,0) 70%)'
        }}
      />

      {/* Subtle Apple Frosted Diffuse Screen Texture */}
      <div className="absolute inset-0 bg-white/20 backdrop-filter backdrop-blur-[1px]" />
    </div>
  );
};
