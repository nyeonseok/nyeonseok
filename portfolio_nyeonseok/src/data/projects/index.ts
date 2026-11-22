import geomate from './geomate';
import projectree from './projectree';
import sadala from './sadala';
import tripBaton from './tripBaton';
import vqa from './vqa';
import menuPicker from './menuPicker';
import type { Project } from '../types';

/** 노출 순서 = 배열 순서 */
export const projects: Project[] = [geomate, projectree, sadala, tripBaton, vqa];

export const smallProjects = [menuPicker];

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** 이전 사이트 주소 → 새 주소 */
export const legacyProjectRedirects: Record<string, string> = {
  'vqa-finetuning': '/projects/vqa',
  'menu-picker': '/projects#small-projects',
  'job-posting-automation': '/extras',
  vero: '/projects',
  'il-kan': '/projects',
  'stage-on': '/projects',
};
