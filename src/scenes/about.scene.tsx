import React from 'react';
import { LoadContent } from '@/pods/load-content';
import content from 'content/es/aboutMe.md';

export const AboutScene = () => <LoadContent content={content} />;
