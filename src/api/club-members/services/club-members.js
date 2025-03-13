'use strict';

/**
 * club-members service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::club-members.club-members');
