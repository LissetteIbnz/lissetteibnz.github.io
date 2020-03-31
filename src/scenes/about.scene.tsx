import React from 'react';
import { LoadContent } from '@/pods/load-content';
import content from '../../content/es/resume.md';

export const AboutScene = () => <LoadContent content={content} />;
